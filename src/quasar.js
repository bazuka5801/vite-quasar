import { Quasar, Notify } from "quasar";
import "quasar/dist/quasar.prod.css";


export function initQuasar(app) {
  app.use(Quasar, {
    config: {
      brand: {
        primary: "#F26338",
        sunshine: "#FEBE2A",
        whiteField: "#E2E1E1",
        darkBG: "#1D2F37"
      },
      globalProperties: {},
      // dark: true
    },
    plugins: {
      Notify
    }
  });
}