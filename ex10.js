let idTemp = 0;
function User() {
  this.listOfUser = [];
  this.add = (item) => {
    item["id"] = idTemp;
    idTemp++;
    this.listOfUser.push(item);
  };
  this.remove = (id) => {
    let index = this.listOfUser.indexOf(this.findById(id));
    if (index != -1) {
      this.listOfUser.splice(index, 1);
    }
  };
  this.change = (id, obj = {}) => {
    for (let i = 0; i < this.listOfUser.length; i++) {
      const element = this.listOfUser[i];
      if (element.id == id) {
        element = { id: element.id, ...obj };
      }
    }
  };
  this.findById = (id) => {
    for (let i = 0; i < this.listOfUser.length; i++) {
      const element = this.listOfUser[i];
      if (element.id == id) {
        return element;
      }
    }
  };
  this.filter = (options = {}) => {
    let filteredList = [];
    let ageStart = options.age.start;
    let ageEnd = options.age.end;
    let nameStart = options.name.start;
    let nameEnd = options.name.end;
    let familyNameStart = options.familyName.start;
    let familyNameEnd = options.familyName.end;
    let educationStart = options.education.start;
    let educationEnd = options.education.end;
    let phoneStart = options.phone.start;
    let phoneEnd = options.phone.end;
    for (let i = 0; i < this.listOfUser.length; i++) {
      const element = this.listOfUser[i];
      if (
        element.age > ageStart &&
        element.age < ageEnd &&
        element.name[0] == nameStart &&
        element.name[element.name.length - 1] == nameEnd &&
        element.familyName[0] == familyNameStart &&
        element.familyName[element.name.length - 1] == familyNameEnd &&
        element.education[0] == educationStart &&
        element.education[element.education - 1] == educationEnd &&
        element.phone[0] > phoneStart &&
        element.phone[element.phone.length - 1] < phoneEnd
      ) {
        filteredList.push(element);
      }
    }
  };
  this.sort = (sortBy) => {
    if (sortBy == "education") {
      this.listOfUser.sort((a, b) => {
        const firstEdu = a.education;
        const secondEdu = b.education;
        if (firstEdu == "diplom" && secondEdu == "lisans") {
          return -1;
        }
        if (firstEdu == "lisans" && secondEdu == "diplom") {
          return 1;
        }
        if (firstEdu == "lisans" && secondEdu == "fogh") {
          return -1;
        }
        if (firstEdu == "fogh" && secondEdu == "lisans") {
          return 1;
        }
        return 0;
      });
    } else if (sortBy == "age") {
      this.listOfUser.sort((a, b) => {
        const firstage = a.age;
        const secondage = b.age;
        if (firstage < secondage) {
          return -1;
        }
        if (secondage < firstage) {
          return 1;
        }

        return 0;
      });
    } else if (sortBy == "familyName") {
      this.listOfUser.sort((a, b) => {
        const firstfamilyName = a.familyName;
        const secondfamilyName = b.familyName;
        if (firstfamilyName < secondfamilyName) {
          return -1;
        }
        if (firstfamilyName > secondfamilyName) {
          return 1;
        }

        return 0;
      });
    } else if (sortBy == "phone") {
      this.listOfUser.sort((a, b) => {
        const firstphone = a.phone;
        const secondphone = b.phone;
        if (firstphone < secondphone) {
          return -1;
        }
        if (firstphone > secondphone) {
          return 1;
        }

        return 0;
      });
    } else {
      this.listOfUser.sort((a, b) => {
        const firstname = a.name;
        const secondname = b.name;
        if (firstname < secondname) {
          return -1;
        }
        if (firstname > secondname) {
          return 1;
        }

        return 0;
      });
    }
  };
  this.export = (id) => {
    let user = this.findById(id);
    Object.assign(temp, user);
    return temp;
  };
}
//age name familyName education phone
