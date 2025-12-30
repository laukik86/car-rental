export default function CarCard({car}) {
    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
            <p className="text-sm text-gray-600">{car.type}</p>
            <p className="mt-2 font-medium">₹{car.pricePerDay} / day</p>
            <p className="text-sm text-gray-500">{car.location}</p>

            <button
                disabled
                className="mt-4 w-full bg-gray-400 text-white py-2 rounded cursor-not-allowed"
                >
                Book Now
                </button>
        </div>
    );
}
//car name type pricePerDay location etc display ka card