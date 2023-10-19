import Image from "next/image";
import toast, { Toast } from "react-hot-toast";
import { Restaurant } from "./toast.interface";

export const toastSuccess = (restaurant: Restaurant) => {
  toast.custom((t: Toast) => (
    <div
      role="alert"
      className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl \"
    >
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          className="w-full"
          src="/images/burguer.png"
          alt="Sunset in the mountains"
          width={500}
          height={500}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{restaurant.name}</div>
          <p className="text-gray-700 text-base">{restaurant.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  ));
};
