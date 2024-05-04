import RootLayouts from "../../layouts/RootLayouts";
import { Link } from "react-router-dom";

export default function login() {
  return (
    <RootLayouts>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white flex rounded-2xl shadow-lg max-w-3xl p-5">
          <div className="sm:w-auto px-2">
            <h2 className="font-bold text-2xl text-center mt-8">Login </h2>
            <p className="text-sm mt-4 bg-blue-200 rounded-xl px-4 py-6 text-center">Akses dan kelola instance dari akun Odoo ini.</p>

            <form action="" className="flex flex-col">
              <p className="mt-8">Email</p>
              <input className="p-2 rounded-xl border" type="text" name="email" placeholder="email" />
              <div className="relative">
                <p className="mt-4 w-full">Password</p>
                <input className="p-2 rounded-xl w-full border" type="password" name="password" placeholder="password" />
              </div>
              <Link to="/Pos" class="mt-4 bg-gray-500 rounded-md text-white py-2 hover:bg-gray-800 text-center">
                Login
              </Link>
            </form>

            <div className="mt-2 grid grid-cols-2 items-center text-xs mb-8">
              <a href="#">Tidak punya akun?</a>
              <a href="#" className="text-right">
                Atur Ulang Kata Sandi
              </a>
            </div>
          </div>
        </div>
      </section>
    </RootLayouts>
  );
}
