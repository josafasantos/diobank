import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Josafá', 1)
const companyAccount: CompanyAccount = new CompanyAccount('Santos', 2)
// companyAccount.getLoan()
// companyAccount.deposit()
peopleAccount.changeStatus()
peopleAccount.deposit()