 <template>
  <div>
    <div class="container-fluid">
      <hr>
      <div class="row">
        <div class="col col-md-3"></div>
        <div class="col col-md-6">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Dirección de email</label
              >

              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="login.email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Contraseña</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="login.password"
              />
            </div>

            <!-- El boton no recarga la pagina al darle prevent, al presionar activa el método loginUser -->
            <button
              type="submit"
              class="btn btn-primary"
              @click.prevent="loginUser"
            >
              Ingresar
            </button>
          </form>
        </div>
        <div class="col col-md-3"></div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import swal from "sweetalert";
import VueJwtDecode from "vue-jwt-decode";
export default {
  // Data es una funcion que devuelve un objeto
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        // console.log(this.login);
        //Endpoint de la API  /api/auth/signin
        let response = await this.$http.post("/api/auth/signin", this.login);
        //accessToken es el nombre de la variable en que se almacena el token en el backend
        let token = response.data.accessToken;
        let user = VueJwtDecode.decode(token);
        console.log(user);
        //jwt json web token
        localStorage.setItem("jwt", token);

        if (token) {
          swal(
            "Successfully logged!",
            `Usted se ha registrado con exito!, ${user.name}`,
            "success"
          );
          //accedo a metodos del router con $router
          this.$router.push("/home");
        }
      } catch (error) {
        swal("An error has ocurred!", "Revise sus datos de ingreso!", "error");
        console.log(error);
      }
    },
  },
};
</script>




<style scoped>
</style>
