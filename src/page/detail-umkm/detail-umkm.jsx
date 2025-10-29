import { useLocation, useNavigate } from "react-router-dom";
import "./detail-umkm.css";

const DetailUmkm = () => {
    const { state } = useLocation();
  const navigate = useNavigate();
  if (!state) {
    return <p>Data tidak ditemukan. <button onClick={() => navigate(-1)}>Kembali</button></p>;
  }
   const umkm = state.data;


   console.log(umkm)
    return (
        <></>
    );
};

export default DetailUmkm;
