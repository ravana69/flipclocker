var hue = 180
var variance = 40
var saturation = 50
var lightness = 50
var opacity = 80
// var textcolour = 'white'
var currentbg = 'bubbles'

function showSettings() {
	document.querySelector('.show-settings-elements').style.opacity = '0'
	setTimeout( function(){
		var settings = document.querySelector('.settings')
		settings.style.zIndex = '999'
		document.querySelector('#show-settings').style.boxShadow = 'none'
		settings.style.boxShadow = '-0.2em 0.2em 0.7em -0.4em hsl(0, 0%, 0%)'
		settings.style.height = '30em'
		settings.style.width = '35em'
		document.querySelector('.settings-head span').style.color = 'hsl(0,90%,42%)'}, 125)
}

function hideSettings() {
	var settings = document.querySelector('.settings')
	document.querySelector('.settings-head span').style.color = 'hsl(220, 16%, 18%)'
	settings.style.height = '2.3em'
	settings.style.width = '6.9em'
	setTimeout( function(){
		settings.style.zIndex = '0'
		document.querySelector('.show-settings-elements').style.opacity = '1'
		document.querySelector('#show-settings').style.boxShadow = '-0.2em 0.2em 0.7em -0.4em hsl(0, 0%, 0%)'
		settings.style.boxShadow = 'none'
	}, 500)
}

// var hueSlider = document.querySelector('#slider-hue')
// var varianceSlider = document.querySelector('#slider-variance')
// var saturationSlider = document.querySelector('#slider-saturation')
// var lightnessSlider = document.querySelector('#slider-lightness')
// var opacitySlider = document.querySelector('#slider-opacity')
var textcolourControl = document.querySelector('input[name="textcolour"]')
var backgroundControl = document.querySelectorAll('input[name="bg"]')

// noUiSlider.create(hueSlider, {
//     start: 220,
//     range: {
//         'min': 0,
//         'max': 360
//     },
//     step: 1
// });

// noUiSlider.create(varianceSlider, {
//     start: 40,
//     range: {
//         'min': 5,
//         'max': 120
//     },
//     step: 1
// });

// noUiSlider.create(saturationSlider, {
//     start: 50,
//     range: {
//         'min': 10,
//         'max': 100
//     },
//     step: 1
// });

// noUiSlider.create(lightnessSlider, {
//     start: 50,
//     range: {
//         'min': 5,
//         'max': 90
//     },
//     step: 1
// });

// noUiSlider.create(opacitySlider, {
//     start: 80,
//     range: {
//         'min': 20,
//         'max': 100
//     },
//     step: 1
// });

// hueSlider.noUiSlider.on('update', function( values, handle ) {
// 	var val = Math.round(values[handle]);
// 	hue = val
// 	document.querySelector('#hue-value').innerHTML = hue
// 	changeColours()
// 	console.log(`=========${hue}==============`);
	
// })

// varianceSlider.noUiSlider.on('update', function( values, handle ) {
// 	var val = Math.round(values[handle]);
// 	variance = val
// 	document.querySelector('#variance-value').innerHTML = variance
// 	changeColours()
// })

// saturationSlider.noUiSlider.on('update', function( values, handle ) {
// 	var val = Math.round(values[handle]);
// 	saturation = val
// 	document.querySelector('#saturation-value').innerHTML = saturation
// 	changeColours()
// })

// lightnessSlider.noUiSlider.on('update', function( values, handle ) {
// 	var val = Math.round(values[handle]);
// 	lightness = val
// 	document.querySelector('#lightness-value').innerHTML = lightness
// 	changeColours()
// })

// opacitySlider.noUiSlider.on('update', function( values, handle ) {
// 	var val = Math.round(values[handle]);
// 	opacity = val
// 	document.querySelector('#opacity-value').innerHTML = opacity
// 	changeColours()
// })

textcolourControl.addEventListener('change', function(){
	headings = document.querySelectorAll('.section h1')
	paragraphs = document.querySelectorAll('.section p')
	headings.forEach( function(heading){
		if(textcolourControl.checked) {
			heading.style.color = 'hsl(0,0%,15%)'
		} else {
			heading.style.color = 'hsl(0,0%,90%)'
		}
	})
	paragraphs.forEach( function(paragraph){
		if(textcolourControl.checked) {
			paragraph.style.color = 'black'
		} else {
			paragraph.style.color = 'white'
		}
	})
})



backgroundControl.forEach( function(bg) {
	bg.addEventListener('change', function() {
		// var container = document.querySelector('.container')
		// container.classList.remove(currentbg)
		// currentbg = bg.value
		// container.classList.add(currentbg)

	})
})

function changeColours() {
	// document.querySelector('#sec1').style.background = 'hsl(' + (hue) + ',' +  saturation + '%, ' + lightness + '%, ' + opacity + '%)'
	// document.querySelector('#sec2').style.background = 'hsl(' + (hue+variance) + ',' +  saturation + '%, ' + lightness + '%, ' + opacity + '%)'
	// document.querySelector('#sec3').style.background = 'hsl(' + (hue+variance*2) + ',' +  saturation + '%, ' + lightness + '%, ' + opacity + '%)'
}

