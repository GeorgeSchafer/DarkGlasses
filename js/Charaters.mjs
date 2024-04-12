import { EasyAccessor } from './modules/EasyAccessor.mjs'



const amelda = new Character({
Amelda: [
    {cling: 12},
    {jealousy: 8},
    {confidence: 8},
    {concern: 12},
    {understanding: 4},
    {overidentification: 12}
]})

const ben = new Character({
    Thomas: [
        {pessimism: 8},
        {confidence: 4},
        {avoidance: 9},
        {isolation: 9},
        {impulsivity: 8},
    ]
})

class Character extends EasyAccessor
{
    constructor(character)
    {
        super()
        this.name = Object.keys(character)[0]
        for(const [key, value] of Object.entries(character))
        {
            this[key] = value
        }
    }
}

export { Character }



