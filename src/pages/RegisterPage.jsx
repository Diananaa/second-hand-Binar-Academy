import { Link } from "react-router-dom";
import useForm from "../utility/UseForm";
import { useDispatch } from "react-redux";
import { Register } from "../redux/action/authAction";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const Registerclick = (e) => {
    e.preventDefault();
    dispatch(Register(form));
    console.log("isi form", form);
  };

  const inputStyle = `rounded-xl px-3 py-2 border w-full mt-1`;

  return (
    <div className="grid lg:grid-cols-2 h-screen">
      <div className="hidden lg:inline-block h-screen">
        <img
          className="object-cover h-full w-full"
          src="/images/login_register_banner.png"
          alt="Banner"
        />
      </div>

      <section className="flex flex-col items-center justify-center mx-auto">
        <form onSubmit={Registerclick} className="lg:w-96 w-72">
          <h1 className="mb-5 text-xl">
            <b>Daftar</b>
          </h1>

          <div className="mb-5">
            <label>Nama</label>
            <br />
            <input
              className={inputStyle}
              type="name"
              name="name"
              placeholder="Nama Lengkap"
              value={form.name}
              onChange={(e) => setForm("name", e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label>Email</label>
            <br />
            <input
              className={inputStyle}
              type="email"
              name="email"
              placeholder="Contoh: johndee@gmail.com"
              value={form.email}
              onChange={(e) => setForm("email", e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label>Password</label>
            <br />
            <input
              className={inputStyle}
              type="password"
              name="password"
              value={form.password}
              onChange={(e) => setForm("password", e.target.value)}
              placeholder="6+ karakter"
              required
            />
          </div>

          <button
            className={`h-10 py-2 px-3 text-white bg-primaryPurple rounded-xl w-full`}
          >
            Daftar
          </button>

          <div className="text-center mt-5">
            <span>Sudah punya akun? </span>
            <Link className="text-primaryPurple" to="/login">
              <b>Masuk disini</b>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}