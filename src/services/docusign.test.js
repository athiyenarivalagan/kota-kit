import { updateDbToSigned } from "./docusign";

test("Can update isSigned field of a spatial layout document", async () => {
    const res = await updateDbToSigned('spatialLayouts', '64745f366e51810949cb8de7')
    expect(res.isSigned).toBe(true)
})