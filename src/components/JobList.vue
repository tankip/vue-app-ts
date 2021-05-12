<template>
  <div class="job-list">
    <p>ordered by: {{ order }}</p>
    <transition-group name="list" tag="ul">
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <p>{{ job.salary }}/=</p>
        </div>
        <div class="description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem dolor nesciunt molestiae, sequi eius libero porro sit in
            recusandae aspernatur rerum. Porro voluptatibus vitae corrupti blanditiis nesciunt, eos doloribus corporis. Corrupti odit beatae
            architecto quisquam autem earum, quidem molestias voluptatibus fugiat voluptatum culpa distinctio consequuntur iure nisi facilis! Omnis.
          </p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Job, OrderTerm } from "../types";

export default defineComponent({
  name: "JobList",
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>,
    },
    order: {
      required: true,
      type: String as PropType<OrderTerm>,
    },
  },
  setup(props) {
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1;
      });
    });

    return { orderedJobs };
  },
});
</script>

<style scoped>
.job-list {
  max-width: 960px;
  margin: 40px auto;
}
.job-list ul {
  padding: 0;
}
.job-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
.job-list h2 {
  margin: 0 0 10px;
}
.salary {
  display: flex;
}
.salary img {
  width: 30px;
}
.salary p {
  color: #17bf66;
  font-weight: bold;
  margin: 10px 4px;
}
.list-move {
  transition: all 1s;
}
.description {
  text-transform: lowercase;
}
</style>
