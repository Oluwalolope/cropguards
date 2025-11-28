import Input from "./UI/Input";
import Label from "./UI/Label";
import Modal from "./UI/Modal";
import Textarea from "./UI/Textarea";

type AddProductProps = {
    isAddProductOpen: boolean,
    handleModalClose: () => void
};

const AddProduct = ({ isAddProductOpen, handleModalClose }: AddProductProps) => {
    return (
      <Modal open={isAddProductOpen} onClose={handleModalClose} >
        <div className="sm:max-w-[500px]">
          <header>
            <h4>Add New Product</h4>
            <p>
              Fill in the details below to add a new product to your store.
            </p>
          </header>
          <form className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="product-name">Product Name</Label>
              <Input id="product-name" placeholder="e.g., Wireless Headphones" autoFocus />
            </div>
            <div className="space-y-2">
              <Label htmlFor="product-description">Description</Label>
              <Textarea id="product-description" placeholder="Describe your product..." rows={3} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="product-price">Price</Label>
                <Input id="product-price" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-stock">Stock</Label>
                <Input id="product-stock" type="number" placeholder="0" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="product-category">Category</Label>
              <Input id="product-category" placeholder="e.g., Electronics" />
            </div>
            <div className="flex gap-3 pt-4">
              <button type="button" className="flex-2 bg-black hover:bg-black/70 transition-colors duration-300 text-white py-2 rounded-md cursor-pointer" onClick={handleModalClose}>
                Add Product
              </button>
              <button type="button" className="flex-1 bg-white hover:bg-neutral-300/70 transition-colors duration-300 text-black py-2 rounded-md cursor-pointer" onClick={handleModalClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    );
}
 
export default AddProduct;