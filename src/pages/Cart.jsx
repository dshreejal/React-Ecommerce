

function Cart() {

    return (
        <>
            <div class="h-[85vh]">
                <div class="max-w-2xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 h-[85vh]">
                    <h2 class="text-center font-bold text-3xl">Cart</h2>
                    <form class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                        <div>
                            <div>
                                <h2 class="text-lg font-medium text-gray-900">Contact information</h2>
                                <div class="mt-4">
                                    <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                                    <div class="mt-1">
                                        <input type="email" id="email-address" name="email-address" autocomplete="email" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                            </div>

                            <div class="mt-10 border-t border-gray-200 pt-10">
                                <h2 class="text-lg font-medium text-gray-900">Shipping information</h2>
                                <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                    <div>
                                        <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                                        <div class="mt-1">
                                            <input type="text" id="first-name" name="first-name" autocomplete="given-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                                        <div class="mt-1">
                                            <input type="text" id="last-name" name="last-name" autocomplete="family-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>



                                    <div class="sm:col-span-2">
                                        <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                                        <div class="mt-1">
                                            <input type="text" name="address" id="address" autocomplete="street-address" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                                        <div class="mt-1">
                                            <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                                        <div class="mt-1">
                                            <select id="country" name="country" autocomplete="country-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option>Nepal</option>
                                                <option>India</option>
                                                <option>Bangladesh</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
                                        <div class="mt-1">
                                            <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="postal-code" class="block text-sm font-medium text-gray-700">Postal code</label>
                                        <div class="mt-1">
                                            <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                                        <div class="mt-1">
                                            <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="mt-10 lg:mt-0">
                            <h2 class="text-lg font-medium text-gray-900">Order summary</h2>
                            <div class="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                <h3 class="sr-only">Items in your cart</h3>
                                <ul role="list" class="divide-y divide-gray-200">
                                    <li class="flex py-6 px-4 sm:px-6">
                                        <div class="flex-shrink-0">
                                            <img src="https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="w-20 rounded-md" />
                                        </div>

                                        <div class="ml-6 flex-1 flex flex-col">
                                            <div class="flex">
                                                <div class="min-w-0 flex-1">
                                                    <h4 class="text-sm">
                                                        <a href="#" class="font-medium text-gray-700 hover:text-gray-800"> Basic Tee </a>
                                                    </h4>
                                                    <p class="mt-1 text-sm text-gray-500">Black</p>
                                                    <p class="mt-1 text-sm text-gray-500">Large</p>
                                                </div>

                                                <div class="ml-4 flex-shrink-0 flow-root">
                                                    <button type="button" class="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500">
                                                        <span class="sr-only">Remove</span>

                                                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="flex-1 pt-2 flex items-end justify-between">
                                                <p class="mt-1 text-sm font-medium text-gray-900">$32.00</p>

                                                <div class="ml-4">
                                                    <label for="quantity" class="sr-only">Quantity</label>
                                                    <select id="quantity" name="quantity" class="rounded-md border border-gray-300 text-base font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                </ul>
                                <dl class="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                                    <div class="flex items-center justify-between">
                                        <dt class="text-sm">Subtotal</dt>
                                        <dd class="text-sm font-medium text-gray-900">$64.00</dd>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <dt class="text-sm">Shipping</dt>
                                        <dd class="text-sm font-medium text-gray-900">$5.00</dd>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <dt class="text-sm">Taxes</dt>
                                        <dd class="text-sm font-medium text-gray-900">$5.52</dd>
                                    </div>
                                    <div class="flex items-center justify-between border-t border-gray-200 pt-6">
                                        <dt class="text-base font-medium">Total</dt>
                                        <dd class="text-base font-medium text-gray-900">$75.52</dd>
                                    </div>
                                </dl>

                                <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Confirm order</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Cart;
