export default () => ({
  page: 1,
  items: [],
  itemsMax: 36, // focce for demo
  itemsPerPage: 12,
  isLoading: false,
  init() {
    this.getItems();
  },
  showMore() {
    this.page += 1;
    this.isLoading = true;
    this.getItems();
  },
  getItems() {
    fetch(`https://picsum.photos/v2/list?page=${this.page}&limit=${this.itemsPerPage}`)
      .then((response) => response.json())
      .then((data) => {
        this.items.push(...data);
        this.isLoading = false;
      });
  },
  hasMoreItems() {
    return this.items.length < this.itemsMax;
  },
  getUrlImage(id) {
    return `https://picsum.photos/id/${id}/270/400`;
  },
});
