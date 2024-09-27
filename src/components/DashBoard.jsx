import Footer from "./Footer";

export default function DashBoard() {
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen">
        <table class="border-spacing-y-3 text-gray-400 border-separate space-y-6 text-sm ">
          <thead class="bg-teal-100 text-gray-600 ">
            <tr>
              <th class="p-3">Brand</th>
              <th class="p-3 text-left">Category</th>
              <th class="p-3 text-left">Price</th>
              <th class="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-teal-100 rounded-lg">
              <td class="p-4 ">Piscina</td>
              <td class="p-4">Technology</td>
              <td class="p-4 ">200.00$</td>
              <td class="p-4">
                <span class="bg-green-400 text-gray-50 rounded-md px-2">
                  available
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
