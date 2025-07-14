import { Minus, Plus, Trash } from "lucide-react";

const CartItem = ({ item }) => {
  return (
    <div className="rounded-xl border border-gray-200 p-4 shadow-sm bg-white hover:shadow-md transition-shadow duration-300 md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <div className="shrink-0 md:order-1">
          <img
            className="h-20 md:h-32 rounded object-cover"
            src={item.image}
            alt={item.name}
          />
        </div>
        <label className="sr-only">Choose quantity:</label>

        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center gap-2">
            <button
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 cursor-not-allowed opacity-70"
              disabled
            >
              <Minus className="text-gray-600" />
            </button>
            <p className="text-gray-900 font-medium">{item.quantity}</p>
            <button
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 cursor-not-allowed opacity-70"
              disabled
            >
              <Plus className="text-gray-600" />
            </button>
          </div>

          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900">${item.price}</p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <p className="text-base font-medium text-gray-900">{item.name}</p>
          <p className="text-sm text-gray-600">{item.description}</p>

          <div className="flex items-center gap-4">
            <button
              className="inline-flex items-center text-sm font-medium text-red-600 cursor-not-allowed opacity-50"
              disabled
            >
              <Trash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
