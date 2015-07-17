ActiveAdmin.register_page "Dashboard" do

  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }

  content title: proc{ I18n.t("active_admin.dashboard") } do
    div class: "blank_slate_container", id: "dashboard_default_message" do
      span class: "blank_slate" do
        span I18n.t("active_admin.dashboard_welcome.welcome")
        small I18n.t("active_admin.dashboard_welcome.call_to_action")
      end
    end

    # Make link to task from admin. # Not full support for our site yet, casuse the strucutre is bit different.
    section "Recent Products" do
      table_for Task.order("created_at desc").limit(5) do
        column :title do |task|
          link_to task.title, [:admin, task]
        end
        column :released_at
      end
      # strong { link_to "View All Products", admin_products_path }
    end
  end # content
end



