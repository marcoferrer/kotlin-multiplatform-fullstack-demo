package org.multiplat.demo

data class User(
        val id: Long,
        val loginId: String,
        val address: Address
)

data class Address(
        val street1: String,
        val street2: String,
        val city: String,
        val state: String,
        val zip: String
){
    fun isValid():Boolean{
        print("Validating address...")

        val result = street1.isNotEmpty() && state != "AK"

        println(result)

        return result
    }
}

data class Pet(val name: String)


