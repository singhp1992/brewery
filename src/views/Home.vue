<template>
  <div class="home" id="demo">
    <h1> All Breweries </h1>
    <p> {{ greeting }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      greeting: 'Hello'
    }
  },
  components: {
    name: 'Home'
  }
}

// const brewery = [
//     {
//         title: 'Free State Brewery',
//         type: 'Micro',
//         address: '1234 Happy Street',
//         city: 'Springfield',
//         state: 'Kansas',
//         phone: '01234567',
//         website_url: 'http://www.beer.com',
//         showDetail: false,
//     },
//     {
//         title: 'Avondale Brewing Co',
//         type: 'Planning',
//         address: '1234 Happy Street',
//         city: 'Springfield',
//         state: 'Missouri',
//         phone: '01234567',
//         website_url: 'http://www.beer.com',
//         showDetail: false,
//     },
//     {
//         title: 'DogFish',
//         type: 'Regional',
//         address: '1234 Happy Street',
//         city: 'Springfield',
//         state: 'Oklahoma',
//         phone: '01234567',
//         website_url: 'http://www.beer.com',
//         showDetail: false
//     },
//     {
//         title: 'Coors',
//         type: 'Micro',
//         address: '1234 Happy Street',
//         city: 'Springfield',
//         state: 'Texas',
//         phone: '01234567',
//         website_url: 'http://www.beer.com',
//         showDetail: false,
//     },
//     {
//         title: 'Heineken',
//         type: 'Planning',
//         address: '1234 Happy Street',
//         city: 'Springfield',
//         state: 'California',
//         phone: '01234567',
//         website_url: 'http://www.beer.com',
//         showDetail: false,
//     }
// ]

// new Vue({
//   el: '#demo',
//   data: {
//     message: '',
//     validation: {
//       valid: false
//     }
//   }
// })

// const app = new Vue(
//     {
//         el: '#brewery-list',
//         data: {
//             title: 'Brewery Library',
//             breweryList: brewery,
//             state: '',
//         },
//         methods: {
//             toggleDetails: function (brewery) {
//                 brewery.showDetail = !brewery.showDetail

//             },
//             filterList: function () {
//                 this.state = event.target.value;
//             }
//         },
//         computed: {
//             uniqueItemsList: function () {
//                 const states = [];
//                 this.breweryList.forEach((item) => {
//                     if (!states.includes(item.state)) {
//                         states.push(item.state);
//                     }
//                 });
//                 return states;
//             }
//         }
//     },
// );

</script>

<style>

.home {
  margin-top: 100px;
}

</style>