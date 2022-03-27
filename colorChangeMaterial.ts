export class ColorSystem implements ISystem {
    update(dt: number) {
        let curColorLerp = Color3.Lerp(curColor, nextColor, colorRatio)

        // colorChangeMaterial.albedoColor = curColorLerp
        colorChangeMaterial.emissiveColor = curColorLerp
        if (colorRatio < 1) {
            colorRatio += 0.02
        } else {
            colorRatio = 0

            curColorIndex = (curColorIndex + 1) % (allColors.length)
            nextColorIndex = (nextColorIndex + 1) % (allColors.length)

            curColor = allColors[curColorIndex]
            nextColor = allColors[nextColorIndex]
        }
    }
}

// Create material
export const colorChangeMaterial = new Material();
colorChangeMaterial.emissiveIntensity = 20

// Initialize ratio between colors
let colorRatio = 0

// Define colors
const allColors = [Color3.Red(), Color3.Yellow(), Color3.Green()]
let curColorIndex = 0
let nextColorIndex = 1
let curColor = allColors[curColorIndex]
let nextColor = allColors[nextColorIndex]

// Add the system to the engine
engine.addSystem(new ColorSystem);
