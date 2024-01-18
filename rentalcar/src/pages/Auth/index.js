import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const url = "https://reqres.in/api/register";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    try {
      const res = await axios.post(url, payload);
      setLoading(false);
      setResponse("Anda Berhasil Mendaftar");
      setTimeout(() => {
        navigate("/");
      }, 3000);
      console.log(res);
    } catch (error) {
      setLoading(false);
      setResponse(error.message);
    }
  };
  return (
    <div className="mx-auto mt-20 flex max-w-[768px] flex-col items-center gap-7">
      <h2 className="text-center text-4xl font-semibold">Register</h2>
      <input
        type="email"
        className="w-1/2 rounded-md border p-2 text-base"
        placeholder="Email"
        autoComplete="off"
        autoFocus
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        className="w-1/2 rounded-md border p-2 text-base"
        placeholder="Password"
        autoComplete="off"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {!loading ? (
        <button
          onClick={handleRegister}
          className="rounded-xl bg-blue-600 px-8 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Register
        </button>
      ) : (
        <button
          onClick={handleRegister}
          className="rounded-xl bg-slate-500 px-8 py-2 font-semibold text-white"
        >
          Please Wait..
        </button>
      )}

      <p className=" text-green-500">{response}</p>
    </div>
  );
};

export default Register;
