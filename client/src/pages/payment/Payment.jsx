import { useForm } from "react-hook-form";
import { z } from "zod";

function Payment() {
  const schema = z.object({
    name : z.string().min(2).max(15),
    email: z.string().email(),
    adress : z.string()
  })

  return (
    <div className="payment__container">
      <h1>Оплата заказа</h1>
      <form>
        <label>Имя:</label>
        <input type="text" />

        <label>Почта:</label>
        <input type="email" />

        <label>Адрес:</label>
        <input type="text" />

        <input type="submit" />
      </form>
    </div>
  )
}

export default Payment
