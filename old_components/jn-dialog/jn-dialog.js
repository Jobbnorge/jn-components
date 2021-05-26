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
        this.jnDialogCtn = null;
        this.jnDialogComp = null;
    }
    mountVueComponent(props, { header, body } = {}) {
        if (!this.jnDialogCtn) {
            if (document.getElementById("jnDialogCtn") !== null) {
                this.jnDialogCtn = document.getElementById("jnDialogCtn");
            } else {
                this.jnDialogCtn = document.createElement("div");
                this.jnDialogCtn.id = "jnDialogCtn";
                document.getElementsByTagName("body")[0].appendChild(this.jnDialogCtn);
            }
        }

        if (this.jnDialogCtn.hasChildNodes()) {
            console.warn("Cancel mount component process: only one modal component in DOM at a time")
            return;
        }

        let offDocumentJnDialogComp = Vue.component(JnDialogComponent.name, JnDialogComponent);
        this.jnDialogComp = new offDocumentJnDialogComp({ propsData: props });

        // ref to header.data and body.data: https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth
        if (header) {
            this.jnDialogComp.$slots.header = this.jnDialogComp.$createElement(header.node, header.data);
        }

        if (body) {
            this.jnDialogComp.$slots.body = this.jnDialogComp.$createElement(body.node, body.data);
        }

        this.jnDialogComp.$mount();
        this.jnDialogCtn.appendChild(this.jnDialogComp.$el);
    }
    setModalProps(props) {
        Object.assign(this.jnDialogComp, props);
    }
    confirm(options) {
        this.mountVueComponent({ ...confirmDefault, ...options });
        this.setModalProps({ ...confirmDefault, ...options });
        var self = this;
        this.jnDialogComp.$on("modalClosed", () => {
            self.unmountJnDialog();
        });

        return new Promise((resolve, reject) => {
            this.jnDialogComp.$on("resolveModal", () => {
                resolve("jn dialog modal resolved");
            });

            this.jnDialogComp.$on("rejectModal", () => {
                reject("jn dialog modal rejected");
            });
        });
    }
    info(options) {
        this.mountVueComponent({ ...infoDefault, ...options });
        this.setModalProps({ ...infoDefault, ...options });
        var self = this;
        this.jnDialogComp.$on("modalClosed", () => {
            self.unmountJnDialog();
        });

        return new Promise(resolve => {
            this.jnDialogComp.$on("resolveModal", () => {
                resolve("info read");
            });
        });
    }
    richInfo(options, childNodes) {
        this.mountVueComponent({ ...infoDefault, ...options }, childNodes);
        this.setModalProps({ ...infoDefault, ...options });
        var self = this;
        this.jnDialogComp.$on("modalClosed", () => {
            self.unmountJnDialog();
        });

        return new Promise(resolve => {
            this.jnDialogComp.$on("resolveModal", () => {
                resolve("rich info read");
            });
        });
    }
    unmountJnDialog() {
        this.jnDialogCtn.removeChild(this.jnDialogCtn.firstChild);
        this.jnDialogComp.$children.forEach(childComp => childComp.$destroy());
        this.jnDialogComp.$destroy();
    }
}
export const jnDialog = new JnDialogModule();