class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }

    get circumference() {
        return this.radius * Math.PI * 2
    }

    set circumference(newCircumference) {
        this.radius = (newCircumference / Math.PI / 2)
    }

    get area() {
        return Math.PI * (this.radius ** 2)
    }
}