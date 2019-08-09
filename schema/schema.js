// import { GraphQLSchema } from 'graphql'

const GraphQLID = require('graphql').GraphQLID;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLSchema = require('graphql').GraphQLSchema
const GraphQLList = require('graphql').GraphQLList
const Printer = require('../models/printer')

const PrinterType = new GraphQLObjectType({
  name: 'Printer',
  fields: () => ({
    id: { type: GraphQLID },
    printer_name: { type: GraphQLString },
    printer_ip: { type: GraphQLString },
    status: { type: GraphQLString },

  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    printer: {
      type: PrinterType,
      args: { id: { type: GraphQLID } },
      resolve (parent, args) {
        return Printer.findByPk(args.id)
      }
    },
    printers: {
      type: GraphQLList(PrinterType),
      args: {},
      resolve (parent, args) {
        return Printer.findAll()
      }
    }

  },

});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    printer: {
      type: PrinterType,
      args: {
        printer_name: {
          type: GraphQLString
        },
        printer_ip: {
          type: GraphQLString
        },
        printer_status: {
          type: GraphQLString
        }
      },
      resolve(parent, args) {
        return printer.create(args);
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});