import EmptyProductNotification from "../components/EmptyProductNotification";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IdentityCard from "../components/IdentityCard";
import ProductCategoryPanel from "../components/ProductCategoryPanel";
import ProductItem from "../components/ProductItem";
import { interest } from "../redux/action/transactionAction";
import Loading from "../components/Loading";

export default function SellerInterestedProductPage() {
  const { interestData } = useSelector((state) => state.interestReducer);
  const isLoading = useSelector((state) => state.globalReducer.isLoading);
  const dispatch = useDispatch();

  const productCategory = [
    "Semua",
    "Hobi",
    "Kendaraan",
    "Baju",
    "Elektronik",
    "Kesehatan",
  ];

  useEffect(() => {
    dispatch(interest());
  }, []);

  return (
    <div className="min-h-screen max-w-5xl mx-auto pt-10">
      <h1 className="text-2xl mb-7">
        <b>Daftar Wishlist Saya</b>
      </h1>
      <IdentityCard isEditEnabled={true} />

      <div className="flex flex-wrap justify-between">
        <ProductCategoryPanel />

        {/* <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto"> */}
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl lg:mx-0 mx-auto">
          {isLoading == true ? (
            <Loading />
          ) : interestData.length < 1 ? <EmptyProductNotification isOnGrid={true} /> : (
            interestData.map((item, index) => (
              <ProductItem
                key={index}
                id={item?.id}
                name={item?.product.nama}
                category={productCategory[item.kategori_id]}
                price={item?.product?.harga}
                img={item?.product.pictures[0].img_url}
                isMine={true}
              />
            ))
          )}

          {/* {sellerProductList.map((item, index) => 
                    <ProductItem key={index} id={item.id} name={item.nama} category={productCategory[item.kategori_id]}
                    price={item.harga} img={item.img_url} isMine={true}/>)} */}
        </section>
      </div>
    </div>
  );
}
