import { BasePage } from "../../base/BasePage.abstract";
import { Header } from "../../components/Header.component";
import { Footer } from "../../components/Footer.component";
import { SearchHeader } from "../../components/SearchHeader.component";
import { CatalogItem } from "../CatalogItem.component";
import { expect } from "@playwright/test";
import { step } from "../../../../helpers/step";
import { Filter } from "../Filter.component";
import { CatalogHeader } from "../CatalogHeader.component";
import { PageSuffix } from "../../../PageSuffix";

export class MacbookAirPage extends BasePage {
    readonly header = new Header(this.page);
    readonly searchHeader = new SearchHeader(this.page);
    readonly footer = new Footer(this.page);
    readonly catalogItem = new CatalogItem(this.page);
    readonly filter = new Filter(this.page);
    readonly catalogHeader = new CatalogHeader(this.page);

    //Locators
    private root = this.page.locator(".catalog-subcategory .catalog-list");
    private filterButton = this.page.locator("button.btn-filter-collapse", {hasText: "Показати всі фільтри"});

    //Actions
    @step("Open macbook air page")
    async open(){
        await this.page.goto(PageSuffix.MACBOOK_AIR_PAGE);
        await this.toBeLoaded();
    }

    @step('Click filter button "Показати всі фільтри"')
    async clickFilterButton(){
        await this.filterButton.click();
    }

    //Verify
    @step("Macbook air page loaded")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }
}