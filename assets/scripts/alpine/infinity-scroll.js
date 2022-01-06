// eslint-disable-next-line import/no-extraneous-dependencies
import debounce from 'lodash.debounce';

export default () => ({
  page: 1,
  items: [],
  itemsPerPage: 12,
  isLoading: false,
  isActive: true,
  init() {
    window.addEventListener('scroll', debounce(() => {
      this.onScroll();
    }, 250));
    this.getItems();
  },
  onScroll() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      this.page += 1;
      this.isLoading = true;
      this.getItems();
    }
  },
  getItems() {
    fetch(`https://picsum.photos/v2/list?page=${this.page}&limit=${this.itemsPerPage}`)
      .then((response) => response.json())
      .then((data) => {
        this.items.push(...data);
        this.isLoading = false;

        if (this.itemsPerPage !== data.length) {
          this.isActive = false;
        }
      });
  },
  getUrlImage(id) {
    return `https://picsum.photos/id/${id}/270/400`;
  },
});
