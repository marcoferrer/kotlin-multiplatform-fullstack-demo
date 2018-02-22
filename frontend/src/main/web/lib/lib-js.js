(function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var equals = Kotlin.equals;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function User(id, loginId, address) {
    this.id = id;
    this.loginId = loginId;
    this.address = address;
  }
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: []
  };
  User.prototype.component1 = function () {
    return this.id;
  };
  User.prototype.component2 = function () {
    return this.loginId;
  };
  User.prototype.component3 = function () {
    return this.address;
  };
  User.prototype.copy_hkvawa$ = function (id, loginId, address) {
    return new User(id === void 0 ? this.id : id, loginId === void 0 ? this.loginId : loginId, address === void 0 ? this.address : address);
  };
  User.prototype.toString = function () {
    return 'User(id=' + Kotlin.toString(this.id) + (', loginId=' + Kotlin.toString(this.loginId)) + (', address=' + Kotlin.toString(this.address)) + ')';
  };
  User.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.loginId) | 0;
    result = result * 31 + Kotlin.hashCode(this.address) | 0;
    return result;
  };
  User.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.loginId, other.loginId) && Kotlin.equals(this.address, other.address)))));
  };
  function Address(street1, street2, city, state, zip) {
    this.street1 = street1;
    this.street2 = street2;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
  Address.prototype.isValid = function () {
    print('Validating address...');
    var result = this.street1.length > 0 && !equals(this.state, 'AK');
    println(result);
    return result;
  };
  Address.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Address',
    interfaces: []
  };
  Address.prototype.component1 = function () {
    return this.street1;
  };
  Address.prototype.component2 = function () {
    return this.street2;
  };
  Address.prototype.component3 = function () {
    return this.city;
  };
  Address.prototype.component4 = function () {
    return this.state;
  };
  Address.prototype.component5 = function () {
    return this.zip;
  };
  Address.prototype.copy_x0a6t6$ = function (street1, street2, city, state, zip) {
    return new Address(street1 === void 0 ? this.street1 : street1, street2 === void 0 ? this.street2 : street2, city === void 0 ? this.city : city, state === void 0 ? this.state : state, zip === void 0 ? this.zip : zip);
  };
  Address.prototype.toString = function () {
    return 'Address(street1=' + Kotlin.toString(this.street1) + (', street2=' + Kotlin.toString(this.street2)) + (', city=' + Kotlin.toString(this.city)) + (', state=' + Kotlin.toString(this.state)) + (', zip=' + Kotlin.toString(this.zip)) + ')';
  };
  Address.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.street1) | 0;
    result = result * 31 + Kotlin.hashCode(this.street2) | 0;
    result = result * 31 + Kotlin.hashCode(this.city) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.zip) | 0;
    return result;
  };
  Address.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.street1, other.street1) && Kotlin.equals(this.street2, other.street2) && Kotlin.equals(this.city, other.city) && Kotlin.equals(this.state, other.state) && Kotlin.equals(this.zip, other.zip)))));
  };
  function Pet(name) {
    this.name = name;
  }
  Pet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pet',
    interfaces: []
  };
  Pet.prototype.component1 = function () {
    return this.name;
  };
  Pet.prototype.copy_61zpoe$ = function (name) {
    return new Pet(name === void 0 ? this.name : name);
  };
  Pet.prototype.toString = function () {
    return 'Pet(name=' + Kotlin.toString(this.name) + ')';
  };
  Pet.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Pet.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  var package$org = _.org || (_.org = {});
  var package$multiplat = package$org.multiplat || (package$org.multiplat = {});
  var package$demo = package$multiplat.demo || (package$multiplat.demo = {});
  package$demo.User = User;
  package$demo.Address = Address;
  package$demo.Pet = Pet;
  Kotlin.defineModule('lib-js', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=lib-js.js.map
