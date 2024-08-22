<!-- UA025 -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card card-table">
          <div class="card-body">
            <div class="title-header option-title d-flex d-block" style="justify-content: start;">
              <a href="javascript:" class="fw-bold"
                style="font-size: calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)));">
                <i class="ri-arrow-left-s-line"></i>
              </a>
              <h5>配送スケジュール</h5>
            </div>
            <div class="theme-form theme-form-2 mega-form d-md-flex mb-4 search-custom">
              <div class="col-sm-4 align-items-center me-md-4 mb-3 mb-md-0 select-custom">
                <label class="col-form-label form-label-title">{自身の道の駅}と取引を行った道の駅</label>
                <select class="js-example-basic-single w-100"
                  style="height: 46px; background: #fff !important; border-radius: .25rem;">
                  <option disabled selected>{自身の道の駅}と取引を行った道の駅の選択</option>
                  <option>全て</option>
                </select>
              </div>
              <div class="col-sm-3 align-items-center">
                <div class="col-sm-12 mb-3">
                  <div class="form-check user-checkbox ps-0 mb-0 checkbox-custom">
                    <input class="checkbox_animated check-it" type="checkbox" />
                    <label class="form-label-title mb-0">出荷スケジュールを表示する</label>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-check user-checkbox ps-0 mb-0 checkbox-custom">
                    <input class="checkbox_animated check-it" type="checkbox" />
                    <label class="form-label-title mb-0">入荷スケジュールを表示する</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-md-flex justify-content-end mb-4">
              <a class="btn btn-outline me-0 me-md-3 mb-2 mb-md-0" href="javascript:">クリア</a>
              <a class="btn btn-primary" href="javascript:">検索</a>
            </div>
            <ScheduleXCalendar :calendar-app="calendarApp" class="schedule-custom" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sx__calendar-wrapper {
  display: none !important;
}

@media only screen and (min-width: 992px) {
  .search-custom {
    align-items: center;
    justify-content: end;
  }

  .schedule-custom {
    height: 500px;
  }

  .sx__time-grid-event {
    cursor: pointer !important;
  }
}
</style>

<script setup>
import { useRouter } from 'vue-router';
import { ScheduleXCalendar } from '@schedule-x/vue';
import {
  createCalendar,
  viewDay,
  viewWeek,
} from '@schedule-x/calendar';
import '@schedule-x/theme-default/dist/index.css';

const router = useRouter();

const calendarApp = createCalendar({
  selectedDate: '2024-08-01',
  locale: 'ja-JP',
  views: [viewDay, viewWeek],
  defaultView: viewWeek.name,
  events: [
    {
      id: 1,
      title: 'Event 1',
      start: '2024-08-01 07:00',
      end: '2024-08-01 11:00',
    },
    {
      id: 2,
      title: 'Event 2',
      start: '2024-08-01 12:30',
      end: '2024-08-01 14:00',
    },
    {
      id: 3,
      title: 'Event 3',
      start: '2024-08-01 22:00',
      end: '2024-08-02 8:00',
    },
    {
      id: 4,
      title: 'Event 4',
      start: '2024-08-02 12:00',
      end: '2024-08-04 13:00',
    },
    {
      id: 4,
      title: 'Event 5',
      start: '2024-08-04 12:00',
      end: '2024-08-04 13:00',
    },
  ],
  callbacks: {
    onEventClick() {
      router.push({ name: 'ship-and-receive-detail-admin' });
    },
  },
});
</script>
