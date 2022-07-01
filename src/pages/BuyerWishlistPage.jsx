import { useEffect } from "react";
import { Link } from "react-router-dom";
import IdentityCard from "../components/IdentityCard";
import ProductCategoryPanel from "../components/ProductCategoryPanel";
import ProductItem from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { getSellerProduct } from "../redux/action/productAction";

export default function BuyerWishlistPage() {
    const { dataLogin } = useSelector( state => state.authReducer )
    const token = localStorage.getItem("user:token");
    const productCategory = ["Semua", "Hobi", "Kendaraan", "Baju", "Elektronik", "Kesehatan"];

    return <div className="min-h-screen max-w-5xl mx-auto pt-10">
        <h1 className="text-2xl mb-7"><b>Daftar Wishlist Saya</b></h1>
        <IdentityCard namaPenjual="Sugiono" kota="Japan" isEditEnabled={true} />

        <div className="flex flex-wrap justify-between">
            <ProductCategoryPanel />

            {/* <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto"> */}
            <section className="grid grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl lg:mx-0 mx-auto">
                {/* {sellerProductList.map((item, index) => 
                    <ProductItem key={index} id={item.id} name={item.nama} category={productCategory[item.kategori_id]}
                    price={item.harga} img={item.img_url} isMine={true}/>)} */}
            </section>
        </div>
    </div>
}