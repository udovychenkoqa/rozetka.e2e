import { PageHolder } from "./base/PageHolder.abstract";
import { HomePage } from "./pages/home/Home.page";
import { LoginModal } from "./modals/login/Login.modal";
import { ComparePage } from "./pages/compare/Compare.page";
import { step } from "../helpers/step";
import { API } from "../api";
import { MacbookAirPage } from "./pages/macbook/MacbookAir.page";
import { MacPage } from "./pages/macbook/Mac.page";
import { FavoritePage } from "./pages/account/Favorite.page";

export class App extends PageHolder {
    readonly api = new API(this.page.request);
    readonly homePage = new HomePage(this.page);
    readonly loginModal = new LoginModal(this.page);
    readonly comparePage = new ComparePage(this.page);
    readonly macbookAirPage = new MacbookAirPage(this.page);
    readonly macPage = new MacPage(this.page);
    readonly favoritePage = new FavoritePage(this.page);

    //Actions
    @step("Save storage state of user")
    async saveStorageStateTo(value: string){
        await this.page.context().storageState({ path: value });
    }
}