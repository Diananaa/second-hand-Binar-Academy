import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyProductNotification from "../components/EmptyProductNotification";
import IdentityCard from "../components/IdentityCard";
import Loading from "../components/Loading";
import ProductCategoryPanel from "../components/ProductCategoryPanel";
import ProductItem from "../components/ProductItem";
import { soldProduct } from "../redux/action/transactionAction";

export default function SellerSoldProductPage() {
  const [token] = useState("");
  const { soldData } = useSelector((state) => state.interestReducer);
  const { isLoading } = useSelector((state) => state.globalReducer);
  const { dataGetProfile } = useSelector((state) => state.authReducer);
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
    dispatch(soldProduct());
  }, [dispatch]);

  return (
    <div className="min-h-screen max-w-5xl mx-auto pt-10">
      <h1 className="text-2xl mb-7">
        <b>Daftar Terjual Saya</b>
      </h1>
      <IdentityCard
        name={dataGetProfile?.name}
        city={dataGetProfile?.kota}
        img={dataGetProfile.img_url}
        isEditEnabled={true}
      />

      <div className="flex flex-wrap justify-between">
        <ProductCategoryPanel />
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl lg:mx-0 mx-auto w-full">
          {isLoading === true ? (
            <Loading />
          ) : soldData.length < 1 ? (
            <EmptyProductNotification isOnGrid={true} />
          ) : (
            soldData.map((item, index) => (
              <ProductItem
                key={index}
                id={item?.id}
                name={item?.product.nama}
                category={productCategory[item.kategori_id]}
                price={item?.product?.harga}
                img={item?.product.pictures[0].img_url}
                isMine={true}
                token={token}
              />
            ))
          )}
        </section>
      </div>
    </div>
  );
}
