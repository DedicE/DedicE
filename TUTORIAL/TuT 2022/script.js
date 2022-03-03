
Vue.component("grocery-item", {
    template: `<li v-on:click="bought = !bought" v-bind:class="{bought: bought} ">{{ title }}</li>`,
    props: ["title"], 
    data: function() {
        return {
            bought: false
        }
    }
});;

new Vue({
    el: "#app"
});

let data = {
    message: `Hello World`
};

new Vue({
    el: "#root",
    data: data 
})
