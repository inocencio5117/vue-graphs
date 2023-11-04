<template>
  <div class="container">
    <header class="header">
      <img class="hamburguer-menu" src="../assets/menu-icon.svg" alt="hamburguer menu icon">
      <h3>Sales Report</h3>
      <span class="user">
        <img class="no-profile-picture" src="../assets/no-profile-picture-icon.svg" alt="no profile picture icon">
        <h4>User Name</h4>
      </span>
    </header>

    <div class="params-container">
      <div class="select-container">
        <label for="categories">Choose a category:</label>

        <select id="categories" v-model="currentCategory">
          <option v-for="category in categories" :label="category.name">{{ category.name }}</option>
        </select>
      </div>

      <div class="select-container">
        <label for="models">Choose a model:</label>

        <select id="models" v-model="currentModel">
          <option v-for="model in models" :label="model.name">{{ model.name }}</option>
        </select>
      </div>

      <div class="select-container">
        <label for="brands">Choose a brand:</label>

        <select id="brands" v-model="currentBrand">
          <option v-for="brand in brands" :label="brand.name">{{ brand.name }}</option>
        </select>
      </div>
    </div>

    <div class="graph-container">
      <Bar class="graph" :data="chartData" />
    </div>



  </div>
</template>

<script>
import { isProxy, toRaw } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import salesData from "../mockedData/salesData.js"

export default {
  components: {
    Bar
  },
  mounted() {
    this.currentCategory = this.categories[0].name
    this.brands = this.categories.filter(item => item.name === this.currentCategory)[0]?.brands
    this.currentBrand = this.brands[0].name
    this.models = this.brands.filter(item => item.name === this.currentBrand)[0]?.models
  },
  watch: {
    currentCategory(newValue) {
      this.brands = this.categories.filter(item => item.name === newValue)[0]?.brands
      this.currentBrand = this.brands[0]?.name
    },
    currentBrand() {
      this.models = this.brands.filter(item => item.name === this.currentBrand)[0]?.models
      this.currentModel = this.models[0]?.name
    }
  },
  data() {
    return {
      categories: salesData.categories,
      brands: [],
      models: [],
      currentCategory: '',
      currentBrand: '',
      currentModel: '',
    }
  },
  methods: {
  },
  computed: {
    months() {
      return Array.from({ length: 12 }, (_, i) => {
        const date = new Date(2022, i, 1);
        return date.toLocaleString('en-US', { month: 'long' });
      })
    },
    chartData() {
      const salesData = this.models.filter(item => item.name === this.currentModel)[0]

      return {
        labels: this.months,
        datasets: [
          {
            label: this.currentModel,
            backgroundColor: '#87b4e7',
            data: isProxy(salesData) ? toRaw(salesData?.sales) : salesData?.sales
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  .header {
    background-color: #6596e0;
    color: #fff;
    padding: .75rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .user {
      display: flex;
      place-items: center;
      .no-profile-picture {
        height: 20px;
        width: 20px;
        cursor: pointer;
        margin: 0 .5rem;
      }
    }

    .hamburguer-menu {
      height: 20px;
      width: 25px;
      cursor: pointer;
    }
  }

  .params-container {
    width: 100%;
    margin: .75rem 0;
    display: flex;
    justify-content: space-evenly;

    .select-container {
      label {
        font-weight: 700;
      }

      select {
        margin: 0 1rem;
        padding: .35rem;
        width: 7.5rem;
        border-radius: 20px;
        border-color: transparent;
        cursor: pointer;
      }
    }
  }

  .graph-container {
    width: 75%;
    height: 90%;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
