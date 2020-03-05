<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="{ parent: !!item.items }"
    >
      <slot name="item" v-bind:item="item"></slot>
      <template v-if="item.items">
        <List :items="item.items">
          <template v-slot:item="{ item }">
            <slot name="item" v-bind:item="item"></slot>
          </template>
        </List>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
};
</script>
