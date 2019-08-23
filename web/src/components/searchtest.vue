<template>
  <f7-page  page-content="true" @page:beforeremove="onPageBeforeRemove" @page:init="onPageInit">    
    <div class="list" id="list">
      <ul>
        <li>
          <a href="#" id="autocomplete-standalone-popup" class="">
            <!-- <f7-button/> -->			
			<div class="item-inner">
				<div class="item-title"></div>
				<div class="item-after"></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
	
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle } from 'framework7-vue';

  export default {
    components: {
      f7Page,
      f7Navbar,
      f7BlockTitle,
    },
    data() {
      return {
        fruits: 'Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple'.split(' '),
      };
    },
    methods: {
      onPageBeforeRemove() {
        const self = this;
        self.autocompleteStandalonePopup.destroy();
       
      },
      onPageInit() {
        const self = this;
        const app = self.$f7;
        const fruits = self.fruits;
        const $ = self.$$;

        // Standalone Popup
        self.autocompleteStandalonePopup = app.autocomplete.create({
          openIn: 'popup', // open in page
          openerEl: '#autocomplete-standalone-popup', // link that opens autocomplete
          closeOnSelect: true, // go back after we select something
          source(query, render) {
            const results = [];
            if (query.length === 0) {
              render(results);
              return;
            }
            // Find matched items
            for (let i = 0; i < fruits.length; i += 1) {
              if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
          },
          on: {
            change(value) {
              // Add item text value to item-after
              $('#autocomplete-standalone-popup').find('.item-after').text(value[0]);
              // Add item value to input value
              $('#autocomplete-standalone-popup').find('input').val(value[0]);
            },
          },
        });

        self.searchbar = app.searchbar.create({
          el: '#searchbar-autocomplete',
          customSearch: true,
          on: {
            search(sb, query) {
              console.log(query);
            },
          },
        });
      },
    },
  };
</script>

<style lang="scss">
	#list{
		position: relative;
		z-index: 1;
		font-size: var(--f7-list-font-size);
		margin: var(--f7-list-margin-vertical) 20;
	}
</style>
