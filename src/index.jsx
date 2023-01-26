
import './style.css'

function generate_random_colors()
{
    var random_number = Math.floor(Math.random()*16777215);
    var random_color = '#' + random_number.toString(16)
    var inverse = '#' + (16777215-random_number).toString(16)
    return [random_color, inverse]
}

const [random_color,inverse] = generate_random_colors()
var foreground = random_color
var background = inverse

generate_random_colors()

const app = <div class="main-item" draggable>Click on me to change the color</div>

// you can edit the element after its creation on the jsx, that allows a lot of extra interactions that you cant do without it
app
.$style('background-color', background)
.$style('color', foreground)
.$on('click', () => {
    const [random_color,inverse] = generate_random_colors()
    foreground = random_color
    background = inverse
    // the update function does manually what the effect does automatically, after calling the update function
    // the dynamic part of the element and its children will be updated
    app.$update()
})

app.$parent(document.body)