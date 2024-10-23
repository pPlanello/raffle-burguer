import Image from "next/image";
import toast, { Toast } from "react-hot-toast";
import { Restaurant } from "./toast.interface";
import Link from "next/link";

export const toastSuccess = (restaurant: Restaurant) => {
  const image = restaurant.image ? restaurant.image : "/images/burguer.png";
  toast.custom((t: Toast) => (
    <div
      role="alert"
      className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl \"
    >
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="text-xl w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-end justify-end font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            X
          </button>
        </div>
        <Image
          className="w-full"
          src={image}
          alt={restaurant.name}
          width={500}
          height={500}
        />
        <div className="px-6 py-6">
          <div className="font-bold text-xl mb-2">{restaurant.name}</div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Top #{restaurant.score}
          </span>
          de Madrid
          <p className="text-gray-700 text-base">{restaurant.description}</p>
        </div>
        <div className="px-6 py-4">
          <Link className="font-bold text-blue-500" href={restaurant.url}>
            {restaurant.name}
          </Link>
        </div>
      </div>
    </div>
  ));
};
