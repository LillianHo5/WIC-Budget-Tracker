export default class BudgetTracker {
    constructor(querySelectorString) {
        this.root = document.querySelector(querySelectorString);
        this.root.innerHTML = BudgetTracker.html();


        //this just means that when the user clicks on something it connects to the method below 
        this.root.querySelector(".new-entry").addEventListener("click", () => {
            this.onNewEntryBtnClick();
        });

        //Load inital data from Local Storage
        this.load();

    }
   
    static html() {
        return `
            <table class="budget-tracker">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="entries"></tbody>
                <tbody>
                    <tr>
                        <td colspan="5" class="controls">
                            <button type="button" class="new-entry">New Entry</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="5" class="summary">
                            <strong>Total:</strong>
                            <span class="total">$0.00</span>
                        </td>
                    </tr>
                </tfoot>
            </table>
        `;
    }

    static entryHtml() {

    }

    load() {

    }

    updateSummary() {

    }

    save() {

    }

    addEntry(entry = {}) {

    }

    getEntryRows() {

    }

    onNewEntryBtnClick() {

    }

    onDeleteEntryBtnClick() {

    }

}