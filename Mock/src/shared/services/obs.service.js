import { useDataStore } from 'stores/data-store';

class OBSService {
  getOBSList(condition) {
    const { getOBSList } = useDataStore();
    return getOBSList(condition);
  }

  getFieldList() {
    const { getFieldList } = useDataStore();
    return getFieldList();
  }

  getInitialList() {
    const { getInitialList } = useDataStore();
    return getInitialList();
  }

  getOBS(id) {
    const { getOBS } = useDataStore();
    return getOBS(id);
  }

  createOBS(data) {
    const { createOBS } = useDataStore();
    return createOBS(data);
  }

  deleteOBS(id) {
    const { deleteOBS } = useDataStore();
    return deleteOBS(id);
  }

  editOBS(data) {
    const { editOBS } = useDataStore();
    return editOBS(data);
  }

  getPlantList() {
    const { getPlantList } = useDataStore();
    return getPlantList();
  }

  getPlant(code) {
    const { getPlant } = useDataStore();
    return getPlant(code);
  }

  getOBSTargetList() {
    const { getOBSTargetList } = useDataStore();
    return getOBSTargetList();
  }

  getPOCList() {
    const { getPOCList } = useDataStore();
    return getPOCList();
  }

  getSafetyCultureList() {
    const { getSafetyCultureList } = useDataStore();
    return getSafetyCultureList();
  }

  getRevisionList(revisionGroup) {
    const { getRevisionList } = useDataStore();
    return getRevisionList(revisionGroup);
  }

  getMaxRevisionGroup() {
    const { getMaxRevisionGroup } = useDataStore();
    return getMaxRevisionGroup();
  }

  getMaxOBSId() {
    const { getMaxOBSId } = useDataStore();
    return getMaxOBSId();
  }
}
export default new OBSService();
