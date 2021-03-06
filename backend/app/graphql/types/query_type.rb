module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    field :current_user, Types::UserType, null: true
    def current_user
      context[:current_user]
    end

    field :tasks, [Types::TaskType], null: false
    def tasks
      Task.all
    end

    field :my_tasks, [Types::TaskType], null: false
    def my_tasks
      current_user = context[:current_user]
      current_user&.tasks
    end
  end
end
