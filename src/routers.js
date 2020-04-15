import inicio from "./componentes/inicio.vue";
import registrar from "./componentes/registrar.vue";
import menu_perdidos from "./componentes/menu_buscar_mas";
import perdi_1mas from "./componentes/perdi_mimas";
import menu_encontrados from "./componentes/menu_encontre_mas";
import encontre_1mas from "./componentes/encontre_1mas";
import info_mascotaen from "./componentes/info_mascotaen";


    export const routers = [
        {
            path:"/", component:inicio
        },

        {
            path:"/registrar", component:registrar
        },

        {
            path:"/menu_perdidos", component:menu_perdidos
        },

        {
            path:"/perdi_1mas", component:perdi_1mas
        },

        {
            path:"/menu_encontrados", component:menu_encontrados
        },

        {
            path:"/encontre_1mas", component:encontre_1mas
        },

        {
            path:"/info_mascotaen", component:info_mascotaen
        },

       


    ]
