<template>
  <div id="app">
    <div id="inspire">
      <v-data-table
        :loading="cargando"
        loading-text="Cargando... Espere por favor"
        :headers="headers"
        :items="usuarios"
        sort-by="id"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>SECCION DE USUARIOS</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Agregar Usuario
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          v-model="editedItem.nombre"
                          label="Nombre del Usuario"
                        ></v-text-field>
                      </v-col>

                    <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          v-model="editedItem.email"
                          label="Email"
                          counter="254"
                          no-resize
                          auto-grow
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          v-model="editedItem.rol"
                          label="Rol"
                          counter="254"
                          no-resize
                          auto-grow
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancelar
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline"
                  >¿Seguro que desea modificar estado de usuario?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancelar</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        
        <template v-slot:item.actions="{ item }">
          <v-icon medium class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
        
          <v-icon large
          @click="deleteItem(item)"
          >
          <template v-if="item.estado">
          mdi-toggle-switch
          </template>
          
          <template v-else>
          mdi-toggle-switch-off-outline
          </template>

          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DataTableUsuario",
  data: () => ({
    dialog: false,
    cargando: true,
    dialogDelete: false,
    headers: [
      { text: "ID", value: "id" },
      {
        text: "Usuario",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Correo", value: "email" },
      { text: "Rol", value: "rol" },
      { text: "Estado", value: "estado" },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    categorias: [],
    usuarios:[],
    editedIndex: -1,
    editedItem: {
      id: 0,
      nombre: "",
      rol: "",
      email: "",
      estado: "",
    },
    defaultItem: {
      id: 0,
      nombre: "",
      rol: "",
      email: "",
      estado: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Usuario" : "Editar Usuario";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.list();
  },

  methods: {
    list() {
      axios
        .get("http://localhost:3000/api/usuario/list", {
          headers:{
            token: this.$store.state.token
          }
        })
        .then((response) => {
          this.usuarios = response.data;
          // console.log(this.usuarios);
          this.cargando = false;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    editItem(item) {
      //opcion 1
      // this.editedIndex = this.categorias.[indexOf(item)].id;
      //opcion 2
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      // activa o desactiva un elemento en vez de borrarlo
      if (this.editedItem.estado === 1) {
        //logica para editar objeto
        // console.log(this.editedIndex.estado)
        axios
          .put("http://localhost:3000/api/usuario/deactivate", {
            id: this.editedItem.id,
          headers:{
            token: this.$store.state.token
        }
          })
          .then((response) => {
            console.log(response);
            this.list();
          })
          .catch((error) => {
            console.log(error);
            return error;
          });

  } else {
        axios
          .put("http://localhost:3000/api/usuario/activate", {
            id: this.editedItem.id,  headers:{
            token: this.$store.state.token
        }
          })
          .then((response) => {
            console.log(response);
            this.list();
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        //logica para editar objeto
        axios
          .put("http://localhost:3000/api/usuario/update", {
            id: this.editedItem.id,
            nombre: this.editedItem.nombre,
            rol: this.editedItem.rol,
            email: this.editedItem.email,
            estado: this.editedItem.estado,  
            headers:{
            token: this.$store.state.token
        }
          })
          .then((response) => {
            console.log(response);
            this.list();
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
        // logica para crear un objeto nuevo
      } else {
        axios
          .post("http://localhost:3000/api/usuario/add", {
            id: this.editedItem.id,
            nombre: this.editedItem.nombre,
            rol: this.editedItem.rol,
            email: this.editedItem.email,
            estado:1,
            headers:{
            token: this.$store.state.token
        }
          })
          .then((response) => {
            console.log(response);
            this.list();
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      }
      this.close();
    },
  },
};
</script>
