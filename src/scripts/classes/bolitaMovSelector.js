class BolitaMovSelector {

    constructor(element) {
        this.element = element;
        this.selected = false;
    }

    getElement() {
        return this.element;
    }

    isSelected() {
        return this.selected;
    }

    setSelected(selected) {
        this.selected = selected;
    }
}

export default BolitaMovSelector;