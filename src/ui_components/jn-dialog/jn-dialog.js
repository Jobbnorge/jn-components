import JnDialogComponent from './JnDialogComponent';

const confirmDefault = {
    modalTitle: "Vennligst bekreft ditt valg",
    modalBody: "Du må bekrefte handlingen for å kunne fortsette.",
    rejectButton: {
        visible: true,
        text: "Avbryt"
    },
    resolveButton: {
        visible: true,
        text: "Bekreft"
    }
};

const infoDefault = {
    modalTitle: "Modal info tittel.",
    modalBody: "Her står det ennå mer detaljer som kunne har vært interessant til brukeren.",
    rejectButton: {
        visible: false
    },
    resolveButton: {
        visible: true,
        text: "Greit"
    }
}

class JnDialogModule {
    constructor() {
        this.jnDialogComp = null;
    }
    mountVueComponent(props) {
        let el = document.createElement("div");
        el.id = "jnDialogCtn";
        document.getElementsByTagName("body")[0].appendChild(el);

        let offDocumentJnDialogComp = Vue.component(JnDialogComponent.name, JnDialogComponent);
        this.jnDialogComp = new offDocumentJnDialogComp({propsData: props}).$mount();

        document.getElementById("jnDialogCtn").appendChild(this.jnDialogComp.$el);
    }
    setModalProps(props) {
        Object.assign(this.jnDialogComp, props);
    }
    confirm(options) {
        if (!document.getElementById("jnDialogCtn")) {
            this.mountVueComponent({ ...confirmDefault, ...options });
        }
  
        this.setModalProps({ ...confirmDefault, ...options })
        this.jnDialogComp.display = true;
        
        var self = this;
        return new Promise((resolve, reject) => {
            this.jnDialogComp.$on("resolveModal", () => {
                self.jnDialogComp.display = false;
                resolve("jn dialog modal resolved");
            });

            this.jnDialogComp.$on("rejectModal", () => {
                self.jnDialogComp.display = false;
                reject("jn dialog modal rejected");
            });
        });
    }
    info(options) {
        if (!document.getElementById("jnDialogCtn")) {
            this.mountVueComponent({ ...infoDefault, ...options });
        }

        this.setModalProps({ ...infoDefault, ...options })
        this.jnDialogComp.display = true;

        var self = this;
        return new Promise(resolve => {
            this.jnDialogComp.$on("resolveModal", () => {
                self.jnDialogComp.display = false;
                resolve("info read");
            });
        });
    }
}
export const jnDialog = new JnDialogModule();