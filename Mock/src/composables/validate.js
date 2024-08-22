import { ref } from 'vue';
import ajv from 'boot/ajv';

export default function useValidate() {
  const errors = ref({});
  const validate = (schema, data) => {
    errors.value = {};
    const validateFn = ajv.compile(schema);
    const valid = validateFn(data);
    if (validateFn.errors) {
      const lst = {};
      validateFn.errors.forEach((obj) => {
        let dataPath = obj.instancePath
          .slice(1, obj.instancePath.length);

        if (!dataPath) {
          // this should be root schema
          if (obj.params.errors?.length > 0) {
            if (obj.params.errors[0].keyword === 'required') {
              dataPath = obj.params.errors[0].params.missingProperty;
            }
          }
        }
        if (!lst[dataPath]) {
          lst[dataPath] = obj.message;
        }
      });
      errors.value = lst;
    }

    return valid;
  };

  return {
    errors,
    // methods
    validate,
  };
}
