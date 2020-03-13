<h1>Toggle Plugin for Tailwind CSS</h1>

<h2>Installation</h2>
<pre>npm i tailwindcss-toggle</pre>

<h2>Usage</h2>
<pre>
{
	theme: {
		extend: {
			inset: {
				'-1/4': '-.25rem', //For A perfect position , you can change it to your desired width and height for your toogle
			},
			colors:{
				'primary': '#276749' //optional colors (By default the plugin uses the config colors)
			},
		},
	},
	variants: {},
	plugins: [
		require('tailwindcss-toggle')(),
	],
}

</pre>

<p>This plugin generates the following utilities:</p>
<pre>
toggle-input-purple-800:checked ~ .toggle__dot {
    transform: translateX(100%);
    background-color: #553c9a;
}
</pre>

<p>to use the full html</p>

      <!-- Toggle Button -->
      <label for="toogleA" class="flex items-center cursor-pointer">
        <!-- toggle -->
        <div class="relative">
          <!-- input -->
          <input id="toogleA" type="checkbox" class="hidden toggle-input-purple-800" /><!-- Change color as desired -->
          <!-- line -->
          <div class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <!-- dot -->
          <div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow -top-1/4 -left-1/4 transition duration-500 ease-in-out">           </div>
        </div>
        <!-- label -->
        <div class="ml-3 text-gray-700 font-medium">
          Toggle Me!
        </div>
      </label>

<p> you can change colors , width and height , but don't forget to set your insets</p>
