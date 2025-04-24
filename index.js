
import { useState } from "react";

export default function FeitosParaNutrir() {
  const [form, setForm] = useState({ nome: "", produto: "", quantidade: "" });
  const [registros, setRegistros] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistros([...registros, form]);
    setForm({ nome: "", produto: "", quantidade: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4b2e2e] to-[#bfa46f] text-white">
      <header className="p-6 text-center">
        <h1 className="text-5xl font-extrabold">Feitos para Nutrir</h1>
        <p className="text-lg mt-2">Brownies e bolos artesanais com carinho e sabor</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        <img src="/brownie1.jpg" alt="Brownie artesanal" className="rounded-2xl shadow-lg" />
        <img src="/bolo1.jpg" alt="Bolo decorado" className="rounded-2xl shadow-lg" />
        <img src="/brownie2.jpg" alt="Brownie com nozes" className="rounded-2xl shadow-lg" />
      </section>

      <section className="max-w-3xl mx-auto px-4">
        <div className="bg-[#5a3c2e] shadow-xl rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Cadastrar Pedido</h2>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <label className="block mb-1">Nome</label>
              <input
                className="bg-[#fff8ec] text-black w-full p-2 rounded"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block mb-1">Produto</label>
              <input
                className="bg-[#fff8ec] text-black w-full p-2 rounded"
                value={form.produto}
                onChange={(e) => setForm({ ...form, produto: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block mb-1">Quantidade</label>
              <input
                className="bg-[#fff8ec] text-black w-full p-2 rounded"
                type="number"
                value={form.quantidade}
                onChange={(e) => setForm({ ...form, quantidade: e.target.value })}
                required
              />
            </div>
            <button className="bg-[#bfa46f] text-black py-2 px-4 rounded hover:bg-[#d6bb7e]">Cadastrar</button>
          </form>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Registros de Pedidos</h2>
          <div className="space-y-4">
            {registros.map((item, index) => (
              <div key={index} className="bg-[#6d4f3a] rounded-xl p-4">
                <p><strong>Nome:</strong> {item.nome}</p>
                <p><strong>Produto:</strong> {item.produto}</p>
                <p><strong>Quantidade:</strong> {item.quantidade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-[#f0e6d6] p-4">
        © 2025 Feitos para Nutrir — Todos os direitos reservados.
      </footer>
    </div>
  );
}
