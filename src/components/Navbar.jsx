import { Disclosure } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navigation = [
  { name: "About", href: "#", current: false },
  { name: "Experiences", href: "#", current: false },
  { name: "Education", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Skills", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
};

const menuItemVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed w-full top-0 z-50 border-b border-white/10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop Navigation */}
              <div className="flex flex-1 justify-center">
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={classNames(
                          item.current
                            ? "bg-white/20 text-white"
                            : "text-gray-300 hover:bg-white/10 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium transition-all duration-200"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial="closed"
            animate={open ? "open" : "closed"}
            variants={menuVariants}
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <motion.div key={item.name} variants={menuItemVariants}>
                    <Disclosure.Button
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-white/20 text-white"
                          : "text-gray-300 hover:bg-white/10 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </motion.div>
                ))}
              </div>
            </Disclosure.Panel>
          </motion.div>
        </>
      )}
    </Disclosure>
  );
}