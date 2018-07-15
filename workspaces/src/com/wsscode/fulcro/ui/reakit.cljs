(ns com.wsscode.fulcro.ui.reakit
  (:refer-clojure :exclude [list])
  (:require ["reakit" :as rk]
            [com.wsscode.fulcro.ui.core :as uc]
            [fulcro.client.primitives :as fp]
            [fulcro.client.localized-dom :as dom]))

(def arrow (uc/wrap-react-component-localized rk/Arrow))
(def backdrop (uc/wrap-react-component-localized rk/Backdrop))
(def base (uc/wrap-react-component-localized rk/Base))
(def block (uc/wrap-react-component-localized rk/Block))
(def blockquote (uc/wrap-react-component-localized rk/Blockquote))
(def box (uc/wrap-react-component-localized rk/Box))
(def button (uc/wrap-react-component-localized rk/Button))
(def card (uc/wrap-react-component-localized rk/Card))
(def code (uc/wrap-react-component-localized rk/Code))
(def divider (uc/wrap-react-component-localized rk/Divider))
(def field (uc/wrap-react-component-localized rk/Field))
(def fit (uc/wrap-react-component-localized rk/Fit))
(def flex (uc/wrap-react-component-localized rk/Flex))
(def grid (uc/wrap-react-component-localized rk/Grid))
(def grid-item (uc/wrap-react-component-localized rk/Grid.Item))
(def group (uc/wrap-react-component-localized rk/Group))
(def group-item (uc/wrap-react-component-localized rk/Group.Item))
(def heading (uc/wrap-react-component-localized rk/Heading))
(def hidden (uc/wrap-react-component-localized rk/Hidden))
(def hidden-container (uc/wrap-react-component-localized rk/HiddenContainer))
(def hidden-hide (uc/wrap-react-component-localized rk/HiddenHide))
(def hidden-show (uc/wrap-react-component-localized rk/HiddenShow))
(def hidden-toggle (uc/wrap-react-component-localized rk/HiddenToggle))
(def image (uc/wrap-react-component-localized rk/Image))
(def inline (uc/wrap-react-component-localized rk/Inline))
(def inline-block (uc/wrap-react-component-localized rk/InlineBlock))
(def inline-flex (uc/wrap-react-component-localized rk/InlineFlex))
(def input (uc/wrap-react-component-localized rk/Input))
(def label (uc/wrap-react-component-localized rk/Label))
(def link (uc/wrap-react-component-localized rk/Link))
(def list (uc/wrap-react-component-localized rk/List))
(def list-item (uc/wrap-react-component-localized rk/ListItem))
(def navigation (uc/wrap-react-component-localized rk/Navigation))
(def overlay (uc/wrap-react-component-localized rk/Overlay))
(def overlay-container (uc/wrap-react-component-localized rk/OverlayContainer))
(def overlay-hide (uc/wrap-react-component-localized rk/OverlayHide))
(def overlay-show (uc/wrap-react-component-localized rk/OverlayShow))
(def overlay-toggle (uc/wrap-react-component-localized rk/OverlayToggle))
(def paragraph (uc/wrap-react-component-localized rk/Paragraph))
(def perpendicular (uc/wrap-react-component-localized rk/Perpendicular))
(def popover (uc/wrap-react-component-localized rk/Popover))
(def popover-arrow (uc/wrap-react-component-localized rk/PopoverArrow))
(def popover-container (uc/wrap-react-component-localized rk/PopoverContainer))
(def popover-hide (uc/wrap-react-component-localized rk/PopoverHide))
(def popover-show (uc/wrap-react-component-localized rk/PopoverShow))
(def popover-toggle (uc/wrap-react-component-localized rk/PopoverToggle))
(def shadow (uc/wrap-react-component-localized rk/Shadow))
(def sidebar (uc/wrap-react-component-localized rk/Sidebar))
(def sidebar-container (uc/wrap-react-component-localized rk/SidebarContainer))
(def sidebar-hide (uc/wrap-react-component-localized rk/SidebarHide))
(def sidebar-show (uc/wrap-react-component-localized rk/SidebarShow))
(def sidebar-toggle (uc/wrap-react-component-localized rk/SidebarToggle))
(def step (uc/wrap-react-component-localized rk/Step))
(def step-container (uc/wrap-react-component-localized rk/StepContainer))
(def step-hide (uc/wrap-react-component-localized rk/StepHide))
(def step-next (uc/wrap-react-component-localized rk/StepNext))
(def step-previous (uc/wrap-react-component-localized rk/StepPrevious))
(def step-show (uc/wrap-react-component-localized rk/StepShow))
(def step-toggle (uc/wrap-react-component-localized rk/StepToggle))
(def table (uc/wrap-react-component-localized rk/Table))
(def table-body (uc/wrap-react-component-localized rk/Table.Body))
(def table-caption (uc/wrap-react-component-localized rk/Table.Caption))
(def table-cell (uc/wrap-react-component-localized rk/Table.Cell))
(def table-column (uc/wrap-react-component-localized rk/Table.Column))
(def table-columngroup (uc/wrap-react-component-localized rk/Table.ColumnGroup))
(def table-foot (uc/wrap-react-component-localized rk/Table.Foot))
(def table-head (uc/wrap-react-component-localized rk/Table.Head))
(def table-row (uc/wrap-react-component-localized rk/Table.Row))
(def tabs (uc/wrap-react-component-localized rk/Tabs))
(def tabs-container (uc/wrap-react-component-localized rk/TabsContainer))
(def tabs-next (uc/wrap-react-component-localized rk/TabsNext))
(def tabs-panel (uc/wrap-react-component-localized rk/TabsPanel))
(def tabs-previous (uc/wrap-react-component-localized rk/TabsPrevious))
(def tabs-tab (uc/wrap-react-component-localized rk/TabsTab))
(def tooltip (uc/wrap-react-component-localized rk/Tooltip))
