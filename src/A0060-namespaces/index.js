/* eslint-disable @typescript-eslint/no-namespace */
var MyNameSpace;
(function (MyNameSpace) {
  MyNameSpace.firstnameNamespace = 'Luiz';
  var PersonNamespace = /** @class */ (function () {
    function PersonNamespace(firstname) {
      this.firstname = firstname;
    }
    return PersonNamespace;
  })();
  MyNameSpace.PersonNamespace = PersonNamespace;
  var personNameSpace = new PersonNamespace(MyNameSpace.firstnameNamespace);
  console.log(personNameSpace);
  var OutroNamespace;
  (function (OutroNamespace) {
    OutroNamespace.firstNamespace = 'nome do outro namespace';
  })((OutroNamespace = MyNameSpace.OutroNamespace || (MyNameSpace.OutroNamespace = {})));
})(MyNameSpace || (MyNameSpace = {}));
var personNameSpace = new MyNameSpace.PersonNamespace(MyNameSpace.firstnameNamespace);
console.log(personNameSpace);
console.log();
console.log(MyNameSpace.OutroNamespace.firstNamespace);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module/module.ts" />
console.log(MyNameSpace.firstnameNamespace);
