
module.exports = function () {
    var data = {
      propietarios: [
        {
          id:1,
          namePropietario: "Luisa",
          emailPropietario: "luisa@gmail.com"
        },
        {
          id:2,
          namePropietario: "Juana",
          emailPropietario: "Juana@gmail.com",
        },
        {
          id:3,
          namePropietario: "Pedro",
          emailPropietario: "Pedro@gmail.com",
        },
        {
          id:4,
          namePropietario: "Jesus",
          emailPropietario: "Jesus@gmail.com",

        }
      ],
      vehiculos:[
        {
          id:1,
          licensePlateVehiculo: "MDF-845",
          manufacturingDateVehiculo:"2022-09-09",
          propietario:{
            id:2
          }
        }
      ]

    }

    return data
  }
